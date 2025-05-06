import shutil
import os

VARS = {"zoneval_path": "/zoneval/", "header_title": "zoneval"}


def make_includes(data):
    spl = data.split("{{include:")
    while len(spl) > 1:
        file = spl[1].split("}}")[0]
        content = open(file, "r").read()
        to_include = f"""<!-- start {file} -->{content}<!-- end {file} -->"""
        data = data.replace("{{include:%s}}" % file, to_include)
        print(f"included: {file}")
        spl = data.split("{{include:")
    return data


def replace_vars(data):
    for k, v in VARS.items():
        data = data.replace("{{var:%s}}" % k, v)
    return data


def do_file(path):
    if path.endswith(".html") or path.endswith(".css") or path.endswith(".js"):
        print(f"doing {path}")
        data = open(path, "r").read()
        data = make_includes(data)
        data = replace_vars(data)
        with open(path, "w") as f:
            f.write(data)


def do_dir(dir_name):
    print(f"doing {dir_name}")
    for file in os.listdir(dir_name):
        path = f"{dir_name}/{file}"
        if os.path.isdir(path):
            do_dir(path)
        elif os.path.isfile(path):
            do_file(path)


if __name__ == "__main__":
    shutil.copytree("src", "docs", dirs_exist_ok=True)
    do_dir("docs")

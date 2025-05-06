build:
	python build.py

run: build
	cd docs && python -m http.server 8000
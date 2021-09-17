---
title: Are We Herd-Immune Yet
GitURL: areweherdimmuneyet
MailingList: general
section: "Others"
date: 2021-02-16
language: Python
license: BSD-2-Clause
site: https://areweherdimmuneyet.huma.id
Description: "A herd-immunity tracker for the COVID-19 vaccine race in the UAE."
Usability: 4
---

### 1. Description

This is a herd-immunity tracker for the COVID-19 vaccine race in the United
Arab Emirates. It uses Numpy for polynomial regression to estimate the number
of doses on a chart (matplotlib).

The program is able to pull open data provided by the National Emergency Crisis
and Disasters Management Authority (NCEMA)'s website, specifically the number
of doses per 100 persons. The number of doses per day is stored in a
comma-separated values (CSV) file, which is used in the estimation model.

The program also generates an HTML page with the latest data and graph based on
`template.html`. There is a `make.sh` file, which is what I use to push the
page to my server which hosts
[areweherdimmuneyet.huma.id](https://areweherdimmuneyet.huma.id).

### 2. Requirements

The following programs should be installed on your system.

- Python 3 (tested with 3.9.1)
- [minify](https://github.com/tdewolff/minify) (optional)

Required pip packages are listed in `requirements.txt`.

### 3. Usage

To pull the latest doses entry from NCEMA, which will be added to the
`data.csv` file:

```
$ python3 main.py pull
```

Pulling the data will also automatically generate the HTML file and the updated
chart.

If you want to just generate the chart and the HTML page, you can run:

```
$ python3 main.py gen
```

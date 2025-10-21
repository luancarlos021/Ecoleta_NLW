# Ingress NGINX

## TL;DR

```console
helm install --create-namespace -n ingress-nginx ingress-nginx .
```

## Introduction

This Chart is used to deploy [Ingress NGINX](https://kubernetes.github.io/ingress-nginx/)

## Prerequisites

- Kubernetes 1.12+
- Helm 3.1.0

## Installing the Chart

This chart can be installed with helm

## Helm

Install chart using helm (Build it first if you haven't)

```console
helm install --create-namespace -n ingress-nginx ingress-nginx .
```

## Configuration

See official [values.yaml](https://github.com/kubernetes/ingress-nginx/blob/main/charts/ingress-nginx/values.yaml)

# Google Cloud, Cloud SDK notes and console commands for shell

Writing this cheatsheet to remember many HOW-TOs of Google Cloud SDK Shell and Cloud Build CI/CD and many more stuff

## Cloud Shell Basic configs 
### Login and select project
```bash
gcloud init # Sets up basic configs of gcloud
gcloud info #‌ Shows system info
```
---
### Authentication
```bash
‌# Opens Google OAuth to log in
gcloud auth login

# Logs out / revokes credentials
gcloud auth  # current credentials
gcloud auth revoke ACCOUNT # revokes specific account ACCOUNT

#‌ Lists credentials
gcloud auth list

# Sets default account
gcloud config set account ACCOUNT

# Sets default project to PROJECT_ID
gcloud config set project PROJECT_ID 
```
## Cloud Functions
Command template to deploy a function with `gcloud`.
```bash
gcloud functions deploy YOUR_FUNCTION_NAME [--gen2] --region=YOUR_REGION --runtime=YOUR_RUNTIME --source=YOUR_SOURCE_LOCATION --entry-point=YOUR_CODE_ENTRYPOINT TRIGGER_FLAGS --set-env-vars VAR1=value1,VAR2=val2,...
```
Useful Links:
- [Implement a Cloud Function | Google Cloud Docs](https://cloud.google.com/functions/docs/deploy#gcloud)
- [Config enviroment variables for a Cloud Function | Google Cloud Docs](https://cloud.google.com/functions/docs/configuring/env-var#gcloud)

## Cloud Source Repositories
Work just like any other git repository, but these are hosted in google cloud. Avoid credentials headache and manage the repo from inside the Google Cloud Shell, but dont forget to set the following:
```bash
git config --global user.name USERNAME
git config --global user.email EMAIL
```

## Cloud Build (CI/CD)
It's used to deploy something from X repository to Y Google Product (GKE, App Engine, Cloud‌ Functions, etc). 

Create a trigger (use Google Console UI) targeting a repo's branch, adding either a `cloudbuild.yaml` or `dockerfile` to it.

When pushing to the targeted branch, it creates an event  which is received by Cloud Build, which takes the configuration file (`cloudbuild.yaml` or `dockerfile`) and deploys the repo as instructed in the configuration file.

`cloudbuild.yaml` example to deploy a Cloud Function:
```yaml
steps:
- name: "gcr.io/cloud-builders/gcloud"
    entrypoint: 'bash'
    args: '-c'
    - 'gcloud functions deploy example_function --entry-point main --region=us-central1 ... ... ...'
options:
    logging: CLOUD_LOGGING_ONLY
timeout: "1600s"
```

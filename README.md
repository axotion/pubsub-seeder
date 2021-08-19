# PubSub Seeder
### PubSub Seeder written in Node.JS/TS as CLI command for extreme convenience usage

![alt text](https://s5.gifyu.com/images/2021-08-19-22.06.46.gif "Title")

## Install

```
npm install pub-sub-seeder 
```
OR globally
```
npm install -g pub-sub-seeder
```

### Optionally

```
gcloud components install pubsub-emulator
```

## Required envs


### For emulator
```
export PUBSUB_PROJECT_ID=test
export PUBSUB_EMULATOR_HOST=localhost:8085
```

### For GCP pub-sub 
```
export PUBSUB_PROJECT_ID=test
exportPUBSUB_CLIENT_EMAIL=
exportPUBSUB_PRIVATE_KEY=
```
## Usage

```
ts-node node_modules_location/lib/cli/seed.ts topic-subs.json
```

## Example file



```json

[
    {
      "topic": "Topic1",
      "subscriptions": ["SubForTopic1"]
    }, 
    {
      "topic": "Topic2",
      "subscriptions": ["SubForTopic2", "SecondSubForTopic2"]
    }
]

```
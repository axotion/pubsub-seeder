# PubSub Seeder
### PubSub Seeder written in JS as CLI command for extreme convenience usage

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
node --es-module-specifier-resolution=node node_modules_location/lib/cli/seed.js topic-subs.json
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
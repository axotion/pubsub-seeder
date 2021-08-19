# PubSub Seeder
### PubSub Seeder written in JS as CLI command for extreme convenience usage

![alt text](https://s5.gifyu.com/images/2021-08-19-22.44.40.gif "Title")


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
export PUBSUB_CLIENT_EMAIL=
export PUBSUB_PRIVATE_KEY=
```
## Usage

```
./node_modules_location/pub-sub-seeder/bin/seed.js topic-subs.json
```
or if installed globally
```
pub-sub-seed topic-subs.json

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
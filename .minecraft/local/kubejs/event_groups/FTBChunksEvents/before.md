# FTBChunksEvents.before

## Basic info

- Valid script types: [SERVER]

- Has result? ✔

- Event class: BeforeEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| source | CommandSourceStack | ✘ |
| chunk | ClaimedChunk | ✘ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| setResult | ClaimResult |  | void | ✘ |
| getResult |  |  | ClaimResult | ✘ |
| setCustomResult | String |  | void | ✘ |
| getLevel |  |  | Level | ✘ |
| getEntity |  |  | Entity | ✘ |
| getClaimPos |  |  | BlockPos | ✘ |
| getPlayer |  |  | Player | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |


### Documented members:

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```



### Example script:

```js
FTBChunksEvents.before(extra_id, (event) => {
	// This space (un)intentionally left blank
});
```


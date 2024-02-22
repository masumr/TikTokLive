TikTokLive
==================
The definitive Python library to connect to TikTok LIVE.

![Connections](https://tiktok.eulerstream.com/analytics/pips/1)
![Downloads](https://pepy.tech/badge/tiktoklive)
![Stars](https://img.shields.io/github/stars/isaackogan/TikTokLive?style=flat&color=0274b5)
![Forks](https://img.shields.io/github/forks/isaackogan/TikTokLive?style=flat&color=0274b5)
![Issues](https://img.shields.io/github/issues/isaackogan/TikTokLive)
[![Support Server](https://img.shields.io/discord/977648006063091742.svg?color=7289da&logo=discord&style=flat)](https://discord.gg/e2XwPNTBBr)

<!-- [![HitCount](https://hits.dwyl.com/isaackogan/TikTokLive.svg?style=flat)](http://hits.dwyl.com/isaackogan/TikTokLive) -->

TikTokLive is a Python library designed to connect to [TikTok LIVE](https://tiktok.com/live) and receive realtime events
such as comments, gifts, and likes through a websocket connection to TikTok's internal Webcast service. This library
allows you to
connect directly to TikTok with just a username (`@unique_id`). No credentials are required to use TikTokLive.

### Sponsors

I'm a 2nd-year Biology student in university who likes to program for fun. Please consider supporting development
through a small donation at [https://www.buymeacoffee.com/isaackogan](https://www.buymeacoffee.com/isaackogan). Anything
you can offer will go towards school & development costs for TikTokLive.

### Support

Join the [TikTokLive discord](https://discord.gg/e2XwPNTBBr) and visit
the [`#py-support`](https://discord.gg/uja6SajDxd)
channel for questions, contributions and ideas.

### Languages

TikTok LIVE is available in several alternate programming languages:

- **Node.JS:** https://github.com/zerodytrash/TikTok-Live-Connector
- **Java:** https://github.com/jwdeveloper/TikTok-Live-Java
- **C#/Unity:** https://github.com/frankvHoof93/TikTokLiveSharp
- **Go:** https://github.com/Davincible/gotiktoklive

## Table of Contents

- [Documentation](https://isaackogan.github.io/TikTokLive/)
- [Licensing](#license)
- [Examples](https://github.com/isaackogan/TikTokLive/tree/master/examples)
- [Contributors](#contributors)

## Getting Started

1. Install the module via pip from the [PyPi](https://pypi.org/project/TikTokLive/) repository

```shell script
$ pip install TikTokLive
```

2. Create your first chat connection

```python
from TikTokLive import TikTokLiveClient
from TikTokLive.events import ConnectEvent, CommentEvent

# Create the client
client: TikTokLiveClient = TikTokLiveClient(unique_id="@isaackogz")


# Listen to an event with a decorator!
@client.on(ConnectEvent)
async def on_connect(event: ConnectEvent):
    print(f"Connected to @{event.unique_id} (Room ID: {client.room_id}")


# Or, add it manually via "client.add_listener()"
async def on_comment(event: CommentEvent) -> None:
    print(f"{event.user.nickname} -> {event.comment}")


client.add_listener(CommentEvent, on_comment)

if __name__ == '__main__':
    # Run the client and block the main thread
    # await client.start() to run non-blocking
    client.run()
```

For more quickstart examples, see the [examples folder](https://github.com/isaackogan/TikTokLive/tree/master/examples)
provided in the source tree.

## Parameters

| Param Name   | Required | Default | Description                                                                                                                                                                                                                                                                              |
|--------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| unique_id    | Yes      | `N/A`   | The unique username of the broadcaster. You can find this name in the URL of the user. For example, the `unique_id` for `https://www.tiktok.com/@isaackogz/live` would be `isaackogz`.                                                                                                   |
| web_proxy    | No       | `None`  | TikTokLive supports proxying HTTP requests. This parameter accepts an `httpx.Proxy`. Note that if you do use a proxy you may be subject to reduced connection limits at times of high load.                                                                                              |
| ws_proxy     | No       | `None`  | TikTokLive supports proxying the websocket connection. This parameter accepts an `httpx.Proxy`. Using this proxy will never be subject to reduced connection limits.                                                                                                                     |
| sign_api_key | No       | `None`  | API keys to the [signature service](https://github.com/isaackogan/TikTokLive/wiki/All-About-Signatures) are not publicly available. They are offered to <u>companies</u> that require increased access to the sign server. Please do not reach out for one if you are not an enterprise. |
| web_kwargs   | No       | `{}`    | Under the scenes, the TikTokLive HTTP client uses the [`httpx`](https://github.com/encode/httpx) library. Arguments passed to `web_kwargs` will be forward the the underlying HTTP client.                                                                                               |
| ws_kwargs    | No        | `{}`     | Under the scenes, TikTokLive uses the [`websockets`](https://github.com/python-websockets/websockets) library to connect to TikTok. Arguments passed to `ws_kwargs` will be forwarded to the underlying WebSocket client.                                                                |

## Methods

A `TikTokLiveClient` object contains the following important methods:

| Method Name  | Notes   | Description                                                                                                                                                                |
|--------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| run          |         | Connect to the livestream and block the main thread. This is best for small scripts.                                                                 |
| add_listener |         | Adds an *asynchronous* listener function (or, you can decorate a function with `@client.on("<event>")`) and takes two parameters, an event name and the payload, an AbstractEvent ||
| connect      | `async` | Connects to the tiktok live chat while blocking the current future. When the connection ends (e.g. livestream is over), the future is released.                            |
| start        | `async` | Connects to the live chat without blocking the main thread. This returns an `asyncio.Task` object with the client loop.                                                    |
| disconnect   | `async` | Disconnects the client from the websocket gracefully, processing remaining events before ending the client loop.                                                           |

## Properties

A `TikTokLiveClient` object contains the following important properties:

| Attribute Name | Description                                                                                                                                                 |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| room_id        | The Room ID of the livestream room the client is currently connected to.                                                                                    |
| web            | The TikTok HTTP client. This client has a lot of useful routes you should explore!                                                                          |
| connected      | Whether you are currently connected to the livestream.                                                                                                      |
| logger         | The internal logger used by TikTokLive. You can use `client.logger.setLevel(...)` method to enable client debug.                                            |
| room_info      | Room information that is retrieved from TikTok when you use a connection method (e.g. `client.connect`) with the keyword argument `fetch_room_info=True` .  |
| gift_info      | Extra gift information that is retrieved from TikTok when you use a connection method (e.g. `client.run`) with the keyword argument `fetch_gift_info=True`. |


## WebDefaults

TikTokLive has a series of global defaults used to create the HTTP client which you can customize. For more info, see
the [web_defaults.py](https://github.com/isaackogan/TikTokLive/blob/master/examples/web_defaults.py) example.

| Parameter                       | Type             | Description                                                                                                                                  |
|---------------------------------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| WebDefaults.tiktok_app_url      | `str`            | The TikTok app URL (`https://www.tiktok.com`) used to scrape the room.                                                                       |
| WebDefaults.tiktok_sign_url     | `str`            | The [signature server](https://github.com/isaackogan/TikTokLive/wiki/All-About-Signatures) used to generate tokens to connect to TikTokLive. |
| WebDefaults.tiktok_webcast_url  | `str`            | The TikTok livestream URL (`https://webcast.tiktok.com`) where livestreams can be accessed from.                                             |
| WebDefaults.client_params       | `Dict[str, Any]` | The URL parameters added on to TikTok requests from the HTTP client.                                                                         |
| WebDefaults.client_headers      | `Dict[str, Any]` | The headers added on to TikTok requests from the HTTP client.                                                                                |
| WebDefaults.tiktok_sign_api_key | `str`            | A global way of setting the `sign_api_key` parameter.                                                                                        |

## Events

A `TikTokLiveClient` instance has the following events

Events can be listened to using a decorator (`@client.on(Event)`) or non-decorator method (`client.add_listener(Event, Union[Callable, Awaiatable])`).
payload parameter. All events use the following signatures for listening:

```python
@client.on(LikeEvent)
async def on_like(event: LikeEvent) -> None:
    ...

async def on_comment(event: CommentEvent) -> None:
    ...

client.add_listener(CommentEvent, on_comment)
```

There are two types of events, [`CustomEvent`](https://github.com/isaackogan/TikTokLive/blob/master/TikTokLive/events/custom_events.py) 
events and [`ProtoEvent`](https://github.com/isaackogan/TikTokLive/blob/master/TikTokLive/events/proto_events.py) events.
Both belong to the TikTokLive `Event` type ad can be listened to. The following events are available:

### Custom Events

- `UnknownEvent` - Events not currently tracked by TikTokLive as they have not been reverse engineered
- `FollowEvent` - Triggered when a user in the livestream follows the streamer
- `ShareEvent` - Triggered when a user shares the livestream
- `LiveEndEvent` - Triggered when the livestream ends
- `ConnectEvent` - Triggered when the Webcast connection is initiated
- `DisconnectEvent` - Triggered when the Webcast connection closes (including the livestream ending)

### Proto Events

If you know what an event does, [make a pull request](https://github.com/isaackogan/TikTokLive/pulls) and add the description. 

- `GiftEvent` - Triggered when a gift is sent to the streamer
- `GoalUpdateEvent` - Triggered when the subscriber goal is updated
- `ControlEvent` - Triggered when a stream action occurs (e.g. Livestream start, end)
- `LikeEvent` - Triggered when the stream receives a like
- `SubNotifyEvent` - Triggered when someone subscribes to the TikTok creator
- `RoomEvent`
- `BarrageEvent`
- `CaptionEvent`
- `CommentEvent`
- `EmoteChatEvent` 
- `EnvelopeEvent`
- `ImDeleteEvent`
- `RoomUserSeqEvent`
- `SocialEvent`
- `RankUpdateEvent`
- `MemberEvent` 
- `PollEvent`
- `QuestionNewEvent`
- `RankTextEvent`
- `HourlyRankEvent`
- `LinkMicArmiesEvent`
- `LinkMicBattleEvent`
- `LinkMicFanTicketMethodEvent`
- `LinkMicMethodEvent`
- `LiveIntroEvent`
- `UnauthorizedMemberEvent`
- `MessageDetectEvent`
- `OecLiveShoppingEvent`
- `RoomPinEvent`
- `SystemEvent`
- `LinkEvent`
- `LinkLayerEvent`

### Special Events

### `GiftEvent`

Triggered every time a gift arrives. Extra information can be gleamed from the `available_gifts` client attribute.
> **NOTE:** Users have the capability to send gifts in a streak. This increases the `event.gift.repeat_count` value until the
> user terminates the streak. During this time new gift events are triggered again and again with an
> increased `event.gift.repeat_count` value. It should be noted that after the end of a streak, a final gift event is
> triggered, which signals the end of the streak with `event.repeat_end`:`1`. The following handlers show how you can deal with this in your code.

Using the low-level direct proto:
```python
@client.on(GiftEvent)
async def on_gift(event: GiftEvent):
    # If it's type 1 and the streak is over
    if event.gift.info.type == 1:
        if event.gift.is_repeating == 1:
            print(f"{event.user.unique_id} sent {event.gift.count}x \"{event.gift.info.name}\"")

    # It's not type 1, which means it can't have a streak & is automatically over
    elif event.gift.info.type != 1:
        print(f"{event.user.unique_id} sent \"{event.gift.info.name}\"")
```

Using the TikTokLive extended proto:
```python
@client.on("gift")
async def on_gift(event: GiftEvent):
    # Streakable gift & streak is over
    if event.gift.streakable and not event.streaking:
        print(f"{event.user.unique_id} sent {event.gift.count}x \"{event.gift.info.name}\"")

    # Non-streakable gift
    elif not event.gift.streakable:
        print(f"{event.user.unique_id} sent \"{event.gift.info.name}\"")

```

### `SubNotifyEvent`

This event will only fire when a session ID (account login) is passed to the HTTP client *before* connecting to TikTok LIVE.
You can set the session ID with [`client.web.set_session_id(...)`](https://github.com/isaackogan/TikTokLive/blob/master/examples/logged_in.py).

## Contributors

* **Isaac Kogan** - *Creator, Primary Maintainer, and Reverse-Engineering* - [isaackogan](https://github.com/isaackogan)
* **Zerody** - *Initial Reverse-Engineering Protobuf & Support* - [Zerody](https://github.com/zerodytrash/)
* **Davincible** - *Reverse-Engineering Stream Downloads*  - [davincible](https://github.com/davincible)
* **David Teather** - *TikTokLive Introduction Tutorial* - [davidteather](https://github.com/davidteather)

See also the full list of [contributors](https://github.com/isaackogan/TikTokLive/contributors) who have participated in
this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

module.exports = {
    app: {
        px: 'e!',
        token: 'OTE2MjU4MjQxNjUzMTMzMzEz.Yanh_A.QjkdrmF8uImVeq-9sRwDNmkevDA',
        playing: 'e!help Eternity'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};

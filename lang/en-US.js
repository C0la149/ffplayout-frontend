export default {
    ok: 'Ok',
    cancel: 'Cancel',
    socketConnected: 'Event stream connected',
    socketDisconnected: 'Event stream disconnected',
    alert: {
        wrongLogin: 'Incorrect login data!',
    },
    button: {
        login: 'Login',
        home: 'Home',
        player: 'Player',
        media: 'Media',
        message: 'Message',
        logging: 'Logging',
        channels: 'Channels',
        configure: 'Configure',
        logout: 'Logout',
    },
    error: {
        notFound: 'Page not found',
        serverError: 'Internal server error',
    },
    input: {
        username: 'Username',
        password: 'Password',
    },
    system: {
        cpu: 'CPU',
        cores: 'Cores',
        load: 'Load',
        memory: 'Memory',
        swap: 'Swap',
        total: 'Total',
        usage: 'Usage',
        network: 'Network',
        in: 'In',
        out: 'Out',
        storage: 'Storage',
        device: 'Device',
        size: 'Size',
        used: 'Used',
    },
    control: {
        noClip: 'No clip is playing',
        ingest: 'Live Ingest',
        start: 'Start Playout Service',
        last: 'Jump to last Clip',
        stop: 'Stop Playout Service',
        reset: 'Reset Playout State',
        restart: 'Restart Playout Service',
        next: 'Jump to next Clip',
    },
    player: {
        start: 'Start',
        file: 'File',
        play: 'Play',
        title: 'Title',
        duration: 'Duration',
        in: 'In',
        out: 'Out',
        ad: 'Ad',
        edit: 'Edit',
        delete: 'Delete',
        copy: 'Copy Playlist',
        loop: 'Loop Clips in Playlist',
        remote: 'Add (remote) Source to Playlist',
        import: 'Import text/m3u file',
        generate: 'Simple and advanced playlist generator',
        reset: 'Reset Playlist',
        save: 'Save Playlist',
        deletePlaylist: 'Delete Playlist',
        unsavedProgram: 'There is a program that is not saved!',
        copyTo: 'Copy current Program to',
        addEdit: 'Add/Edit Source',
        audio: 'Audio',
        customFilter: 'Custom Filter',
        deleteFrom: 'Delete program from',
        deleteSuccess: 'Playlist deleted...',
        generateProgram: 'Generate Program',
        simple: 'Simple',
        advanced: 'Advanced',
        sorted: 'Sorted',
        shuffle: 'Shuffle',
        shift: 'Shift',
        all: 'All',
        addBlock: 'Add time block',
        infinitInfo: 'Playout runs in infinite mode. No time based information is possible.',
    },
    media: {
        notExists: 'Storage not exist!',
        create: 'Create Folder',
        upload: 'Upload Files',
        deleteTitle: 'Delete File/Folder',
        deleteQuestion: 'Are you sure that you want to delete',
        preview: 'Preview',
        rename: 'Rename File',
        newFile: 'New filename',
        createFolder: 'Create Folder',
        foldername: 'Foldername',
        current: 'Current',
        overall: 'Overall',
        uploading: 'Uploading',
        moveError: 'Move error',
        deleteError: 'Delete error',
        folderExists: 'Folder exists already',
        folderCreate: 'Folder create done...',
        folderError: 'Folder create error',
        uploadError: 'Upload error',
        fileExists: 'File exists already!',
    },
    message: {
        savePreset: 'Save Preset',
        newPreset: 'New Preset',
        delPreset: 'Delete Preset',
        delText: 'Are you sure that you want to delete preset',
        placeholder: 'Message',
        xAxis: 'X Axis',
        yAxis: 'Y Axis',
        showBox: 'Show Box',
        boxColor: 'Box Color',
        boxAlpha: 'Box Alpha',
        size: 'Size',
        spacing: 'Spacing',
        overallAlpha: 'Overall Alpha',
        fontColor: 'Font Color',
        fontAlpha: 'Font Alpha',
        borderWidth: 'Border Width',
        send: 'Send',
        name: 'Name',
    },
    log: {
        download: 'Download log file',
    },
    config: {
        channel: 'Channel',
        user: 'User',
        channelConf: 'Channel Configuration',
        addChannel: 'Add new Channel',
        name: 'Name',
        previewUrl: 'Preview URL',
        configPath: 'Config Path',
        extensions: 'Extra Extensions',
        service: 'Service',
        save: 'Save',
        delete: 'Delete',
        updateChannelSuccess: 'Update channel config success!',
        updateChannelFailed: 'Update channel config failed!',
        errorChannelDelete: 'First channel can not be deleted!',
        deleteChannelSuccess: 'Delete GUI config success!',
        deleteChannelFailed: 'Delete GUI config failed!',
        playoutConf: 'Playout Configuration',
        general: 'General',
        rpcServer: 'RPC Server',
        mail: 'Email',
        logging: 'Logging',
        processing: 'Processing',
        ingest: 'Ingest',
        playlist: 'Playlist',
        storage: 'Storage',
        text: 'Text',
        task: 'Task',
        out: 'Out',
        placeholderPass: 'Password',
        help: 'Help',
        generalText: `Sometimes it can happen that a file is corrupted but still playable, this can cause a streaming error on all following files. The only way to fix this is to stop and restart ffplayout. Here we only say when to stop, the starting process is up to you. The best way is a systemd service on Linux.
        'stop_threshold' will stop ffplayout if it is async in time above this value. A number less than 3 may cause unexpected errors.`,
        rpcText: 'Run a JSON RPC server to get information about what is playing and for some control functions.',
        mailText: `Send error messages to the email address, such as missing playlist; invalid json format; missing clip path. Leave the recipient blank if you don't need it. 'mail_level' can be INFO, WARNING or ERROR. 'interval' means seconds until a new mail is sent.`,
        logText: `If 'log_to_file' is true, log to file, if false, log to console. 'backup_count' says how long log files will be saved in days. 'local_time' to false will set log timestamps to UTC. Path to /var/log/ only if you are running this as a daemon.
        'level' can be DEBUG, INFO, WARNING, ERROR. 'ffmpeg_level' can be INFO, WARNING, ERROR. 'detect_silence' logs an error message if the audio line is silent for 15 seconds during the validation process.`,
        processingText: `Default processing for all clips to make them unique. Mode can be Playlist or Folder. 'aspect' must be a float number. 'logo' is only used if the path exists.
        'logo_scale' scales the logo to the target size, leave empty if no scaling is needed, format is 'width:height', for example '100:-1' for proportional scaling. With 'logo_opacity' you can make the logo transparent.
        With 'audio_tracks' it is possible to configure how many audio tracks should be processed. 'audio_channels' can be used if the audio has more channels than just stereo. With 'logo_position' in 'x:y' format you set the logo position. With 'custom_filter' it is possible to apply additional filters. The filter outputs should end with [c_v_out] for video filters and [c_a_out] for audio filters.`,
        ingestText: `Run a server for an ingest stream. This stream will override the normal streaming until it is done. There is only a very simple authentication mechanism to check if the stream name is correct. 'custom_filter' can be used in the same way as in the process section.`,
        playlistText: `'path' can be a path to a single file or a directory. For directory specify only the root folder, for example '/playlists', subdirectories will be read by the program. Subdirectories need this structure '/playlists/2018/01'.
        'day_start' is the time at which the playlist should start, leave 'day_start' empty if the playlist should always start at the beginning. 'length' represents the target length of the playlist, if empty, real length will not be considered. 'infinit: true' works with single playlist file and loops it infinitely.`,
        storageText: `Play ordered or random files from path. 'filler_clip' is for filling the end to reach 24 hours, it will loop when necessary. Set 'extensions' to search only for files with that extension. Set 'shuffle' to 'true' to select files randomly.`,
        textText: `Overlay text in combination with libzmq for remote text manipulation. On Windows, the font file path must be 'C\\:/WINDOWS/fonts/DejaVuSans.ttf'. 'text_from_filename' activates text extraction from a filename. With 'style' you can set the drawtext parameters like position, color, etc. Post Text via API will override this. With 'regex' you can format the filename to get a title.`,
        taskText: `Run an external program with a given media object. The media object is in json format and contains all the information about the current clip. The external program can be a script or a binary. or a binary, but should only run for a short time.`,
        outText: `The final playout compression. Adjust the settings according to your needs. 'mode' has the options 'desktop', 'hls', 'null', 'stream'. Use 'stream' and adjust the 'output_param:' settings if you want to stream to an rtmp/rtsp/srt/... server. In production don't serve hls playlist with ffpapi, use nginx or another web server!`,
        restartTile: 'Restart Playout',
        restartText: 'Restart ffplayout to apply changes?',
    },
    user: {
        title: 'User Configuration',
        add: 'Add User',
        delete: 'Delete',
        name: 'Username',
        mail: 'Email',
        password: 'Password',
        newPass: 'New Password',
        confirmPass: 'Confirm Password',
        save: 'Save',
        admin: 'Admin',
        deleteNotPossible: 'Delete current user not possible!',
        deleteSuccess: 'Delete user done!',
        deleteError: 'Delete user error',
        addSuccess: 'Add user success!',
        addFailed: 'Add user failed!',
        mismatch: 'Password mismatch!',
        updateSuccess: 'Update user profile success!',
        updateFailed: 'Update user profile failed!',
    },
}
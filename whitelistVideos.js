function allowOnlySpecifiedChannels() {
    const allowedChannelIds = [
        '@LinusTechTips', // LinusTechTips
        '@SleepStudy',
        '@freecodecamp',
        '@StudyToSuccess',
        // Add more channel IDs here
    ];

    // Function to hide videos that are not from the LinusTechTips channel
    const hideNonAllowedVideos = () => {
        const videoContainers = document.querySelectorAll('ytd-video-renderer, ytd-grid-video-renderer, ytd-item-section-renderer, ytd-rich-item-renderer, ytd-rich-grid-media, ytd-compact-video-renderer');

        videoContainers.forEach(container => {
            const channelLinkElement = container.querySelector("a.yt-simple-endpoint.style-scope.yt-formatted-string");
            if (channelLinkElement) {
                const channelId = new URL(channelLinkElement.href).pathname.split('/').pop();
                if (allowedChannelIds.includes(channelId)) {
                    console.log(`Allowing video from channel: ${channelId}`);
                } else {
                    console.log(`Hiding video not from allowed channels: ${channelId}`);
                    container.style.display = 'none';
                }
            }
        });
    };

    hideNonAllowedVideos();

    // Run the hide function when new content is loaded
    const observer = new MutationObserver(hideNonAllowedVideos);
    observer.observe(document.body, { childList: true, subtree: true });
}

// Call the block function
allowOnlySpecifiedChannels()

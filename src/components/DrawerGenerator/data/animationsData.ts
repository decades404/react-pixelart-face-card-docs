export const animationsData = (animation: string)  => {
    switch (animation) {
        case 'idle':
            return { top: -1, duration: 1, repeat: -1, yoyo: true , ease: 'bounce.in'}
            break;
        case 'fade':
            console.log("fade!")
            return {
                 autoAlpha:0, duration: 1,   repeat: -1, 
                 yoyo: true , 
                 ease: 'Linear.easeNone',
              
               
                }
            break;
        default:
            break;
    }
}
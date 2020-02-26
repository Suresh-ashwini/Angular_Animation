import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  animation,
  useAnimation
} from '@angular/animations';

export let bounceOutLeftAnimation = animation(
  animate(
    '0.5s cubic-bezier(.17,.67,.84,.14)',
    //       style({ transform: "translateX(-100%)" })
    // From animate.css github code we design the keyframe within animate function

    // @keyframes bounceOutLeft {
    //   20% {
    //     opacity: 1;
    //     transform: translate3d(20px, 0, 0);
    //   }

    //   to {
    //     opacity: 0;
    //     transform: translate3d(-2000px, 0, 0);
    //   }
    // }
    keyframes([
      style({
        offset: 0.2,
        // from line 18
        opacity: 1,
        //  from line 19
        transform: 'translateX(20px)'
        // from line 20
      }),
      style({
        offset: 1,
        // from line 23
        opacity: 0,
        // from line 24
        transform: 'translateX(-100%)'
        // To make it exit from complete screen
      })
    ])
  )
);

export const fade = trigger('fade', [
  state('void', style({ backgroundColor: 'yellow', opacity: 0 })),
  transition(':enter,:leave', [
    // transition("void <=> *", [
    // style({ backgroundColor: "yellow", opacity: 0 }),
    // animate(4000, style({ backgroundColor: 'white', opacity: 1 }))
    animate(2000)
  ])
  // transition('*=>void', [animate(2000)])
]);

export const slide = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(-10px)' }),
    animate(500)
  ]),
  transition(':leave', [
    // animate("0.5s ease-in", style({ transform: "translateX(-100%)" }))
    //  or
    useAnimation(bounceOutLeftAnimation)
  ])
]);

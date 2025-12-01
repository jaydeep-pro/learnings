/**
 * An Observable is a producer of values over time.

Ex:
 
Promise → gives ONE value in the future.

Observable → gives MANY values over time.

You subscribe to Observables.
 */


// Using RxJS (the standard Observable library)

import { Observable } from 'rxjs';

const obs = new Observable(subscriber => {
    subscriber.next(1); // emit value 1
    subscriber.next(2); // emit value 2
    subscriber.unsubscribe();
    setTimeout(() => {
        subscriber.next(3); // emit value 3 after 1 second
        subscriber.complete("done"); // signal that the observable is done
    }, 1000);
});

// Subscribing to the Observable
obs.subscribe({
    next: value => console.log(value),
    complete: (value) => console.log(value)
})
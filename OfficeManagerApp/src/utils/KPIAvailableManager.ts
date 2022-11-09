import { Subject } from 'rxjs';

export class KPIAvailableManager {
    subject$ = new Subject();

    getSubject() {
        return this.subject$;
    }

    setSubject(value: any) {
        this.subject$.next(value);
    }
}

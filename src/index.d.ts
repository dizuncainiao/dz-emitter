declare type CallBack<T = unknown> = (event: T) => void
declare type CallBackList<T = unknown> = Array<CallBack<T>>

declare interface IEventItem {
    isOnce: boolean
    callbacks: CallBackList
}

declare interface IEvent {
    [propName: string]: IEventItem
}

export declare class DzEmitter {

    private events: IEvent;

    private addEvent(e: string, callback: CallBack, isOnce: boolean): void;

    emit(e: string, data: unknown): void;

    on(e: string, callback: CallBack): void;

    once(e: string, callback?: CallBack): void;

    off(e: string, callback?: CallBack): void;

}

export default DzEmitter;

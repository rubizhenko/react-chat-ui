import * as React from 'react';
import Message from '../Message';
interface ChatFeedInterface {
    props: {
        bubblesCentered?: boolean;
        bubbleStyles?: object;
        hasInputField?: boolean;
        isTyping?: boolean;
        maxHeight?: number;
        messages: any;
        showSenderName?: boolean;
        chatBubble?: React.Component;
        disableScrollDistance?: number;
        onScrollUp?: () => void;
        onScrollDown?: () => void;
    };
}
declare type ChatFeedState = {
    autoScrollDisabled: boolean;
};
declare type ChatView = {
    scrollHeight: number;
    clientHeight: number;
    scrollTop: number;
} & HTMLDivElement;
export default class ChatFeed extends React.PureComponent {
    props: any;
    chat: ChatView;
    setState: <K extends keyof ChatFeedState>(state: Pick<ChatFeedState, K>, callback?: () => any) => void;
    state: ChatFeedState;
    constructor(props: ChatFeedInterface);
    scrollListener(e: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps?: {
        messages: any[];
    }): void;
    scrollToBottom(): void;
    renderMessages(messages: [Message]): any[];
    render(): any;
}
export {};

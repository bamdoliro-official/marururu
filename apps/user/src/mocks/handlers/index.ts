import { faqHandlers } from './faq';
import { mainHandlers } from './main';
import { noticeHandlers } from './notice';

export const handlers = [...noticeHandlers, ...mainHandlers, ...faqHandlers];

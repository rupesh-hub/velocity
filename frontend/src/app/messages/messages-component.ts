import { Component, inject } from '@angular/core';
import { MessagesService } from './messages-service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { MessageResponse } from './messages.model';

@Component({
  selector: 'vc-messages-component',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div class="min-h-screen w-full flex items-center justify-center bg-slate-50/50 p-4 font-sans antialiased">

      <div class="w-full max-w-xl text-justify bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">

        <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white">
          <h3 class="text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em]">Internal Notification</h3>
          <div class="flex items-center gap-2">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span class="text-[10px] font-medium text-indigo-600 tracking-wide">CONNECTED</span>
          </div>
        </div>

        <div class="p-8">
          @if (message$ | async; as msg) {
            <div class="space-y-4">
              <div>
                <h4 class="text-xl font-semibold text-slate-900 leading-snug tracking-tight">
                  {{ msg.content }}
                </h4>
                <p class="mt-3 text-sm text-slate-500 leading-relaxed font-normal">
                  You received a new update from the system. Please verify the details below to ensure compliance with your current dashboard settings.
                </p>
              </div>

              <div class="pt-4 flex items-center text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Received: {{ msg.timestamp }}
              </div>
            </div>
          } @else {
            <div class="animate-pulse space-y-4">
              <div class="h-6 w-3/4 bg-slate-100 rounded-sm"></div>
              <div class="space-y-2">
                <div class="h-3 w-full bg-slate-50 rounded-sm"></div>
                <div class="h-3 w-full bg-slate-50 rounded-sm"></div>
                <div class="h-3 w-2/3 bg-slate-50 rounded-sm"></div>
              </div>
              <div class="pt-4 h-3 w-24 bg-slate-100 rounded-sm"></div>
            </div>
          }
        </div>

        <div class="px-8 py-4 bg-slate-50/30 border-t border-slate-100 flex justify-end">
          <button class="text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors duration-300 flex items-center gap-1">
            VIEW DETAILS
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  `,
})
export class MessagesComponent {
  private _messagesService = inject(MessagesService);
  protected message$: Observable<MessageResponse> = this._messagesService.message();
}

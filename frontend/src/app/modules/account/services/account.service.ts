import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMenuItem } from '../models/menu-item.interface';
import { CHATS_MENU_ITEMS } from '../models/menu-items';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  activeMenuItem: BehaviorSubject<IMenuItem> = new BehaviorSubject(CHATS_MENU_ITEMS[0]);
  constructor() { }
}

import { ControlBase } from 'src/dynamicform/controls/controlBase';
import { DropdownControl } from 'src/dynamicform/controls/control-dropdown';
import { TextboxControl } from 'src/dynamicform/controls/control-textbox';
import { Validators } from '@angular/forms';

export const testform: ControlBase<any>[] = [
  new DropdownControl({
    key: 'food',
    label: 'Favourite Food',
    options: [{ key: 'pizza', value: 'Pizza' }, { key: 'hamburger', value: 'Hamburger' }, { key: 'chili', value: 'Chili' }, { key: 'coffe', value: 'Coffe' }],
    order: 50
  }),

  new TextboxControl({
    key: 'fullName',
    label: 'Full name',
    value: 'John Smith',
    validators: [Validators.required, Validators.minLength(4)],
    order: 10
  }),
  new TextboxControl({
    key: 'nickName',
    label: 'Nick Name',
    value: '',
    validators: [Validators.required, Validators.minLength(4), Validators.pattern('^[A-Z][a-z]*')],
    order: 20
  }),
  new TextboxControl({
    key: 'password',
    label: 'Password',
    value: '',
    validators: [Validators.required, Validators.minLength(6)],
    order: 30
  }),

  new TextboxControl({
    key: 'emailAddress',
    label: 'Email',
    type: 'text',
    validators: [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')],
    order: 40
  })
];

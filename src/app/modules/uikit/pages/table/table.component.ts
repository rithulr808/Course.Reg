import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { User } from './model/user.model';
import { FormsModule } from '@angular/forms';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { TableFooterComponent } from './components/table-footer/table-footer.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { TableActionComponent } from './components/table-action/table-action.component';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    AngularSvgIconModule,
    FormsModule,
    TableHeaderComponent,
    TableFooterComponent,
    TableRowComponent,
    TableActionComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})

export class TableComponent implements OnInit {
  // users = signal<User[]>([]);
  users = signal<User[]>([
    {
      id: 1,
      name: 'John Doe',
      age: 28,
      username: 'john_doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
      website: 'https://johndoe.com',
      occupation: 'Software Developer',
      hobbies: ['Reading', 'Coding', 'Travelling'],
      selected: false, // Added 'selected' property
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      username: 'jane_smith',
      email: 'janesmith@example.com',
      phone: '987-654-3210',
      website: 'https://janesmith.com',
      occupation: 'Graphic Designer',
      hobbies: ['Photography', 'Art', 'Gaming'],
      selected: false, // Added 'selected' property
    },
    {
      id: 3,
      name: 'David Johnson',
      age: 45,
      username: 'david_johnson',
      email: 'davidjohnson@example.com',
      phone: '555-123-4567',
      website: 'https://davidjohnson.com',
      occupation: 'Project Manager',
      hobbies: ['Hiking', 'Writing', 'Cycling'],
      selected: false, // Added 'selected' property
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      username: 'jane_smith',
      email: 'janesmith@example.com',
      phone: '987-654-3210',
      website: 'https://janesmith.com',
      occupation: 'Graphic Designer',
      hobbies: ['Photography', 'Art', 'Gaming'],
      selected: false, // Added 'selected' property
    },
    {
      id: 3,
      name: 'David Johnson',
      age: 45,
      username: 'david_johnson',
      email: 'davidjohnson@example.com',
      phone: '555-123-4567',
      website: 'https://davidjohnson.com',
      occupation: 'Project Manager',
      hobbies: ['Hiking', 'Writing', 'Cycling'],
      selected: false, // Added 'selected' property
    },   {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      username: 'jane_smith',
      email: 'janesmith@example.com',
      phone: '987-654-3210',
      website: 'https://janesmith.com',
      occupation: 'Graphic Designer',
      hobbies: ['Photography', 'Art', 'Gaming'],
      selected: false, // Added 'selected' property
    },
    {
      id: 3,
      name: 'David Johnson',
      age: 45,
      username: 'david_johnson',
      email: 'davidjohnson@example.com',
      phone: '555-123-4567',
      website: 'https://davidjohnson.com',
      occupation: 'Project Manager',
      hobbies: ['Hiking', 'Writing', 'Cycling'],
      selected: false, // Added 'selected' property
    },   {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      username: 'jane_smith',
      email: 'janesmith@example.com',
      phone: '987-654-3210',
      website: 'https://janesmith.com',
      occupation: 'Graphic Designer',
      hobbies: ['Photography', 'Art', 'Gaming'],
      selected: false, // Added 'selected' property
    },
    {
      id: 3,
      name: 'David Johnson',
      age: 45,
      username: 'david_johnson',
      email: 'davidjohnson@example.com',
      phone: '555-123-4567',
      website: 'https://davidjohnson.com',
      occupation: 'Project Manager',
      hobbies: ['Hiking', 'Writing', 'Cycling'],
      selected: false, // Added 'selected' property
    },   {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      username: 'jane_smith',
      email: 'janesmith@example.com',
      phone: '987-654-3210',
      website: 'https://janesmith.com',
      occupation: 'Graphic Designer',
      hobbies: ['Photography', 'Art', 'Gaming'],
      selected: false, // Added 'selected' property
    },
    {
      id: 3,
      name: 'David Johnson',
      age: 45,
      username: 'david_johnson',
      email: 'davidjohnson@example.com',
      phone: '555-123-4567',
      website: 'https://davidjohnson.com',
      occupation: 'Project Manager',
      hobbies: ['Hiking', 'Writing', 'Cycling'],
      selected: false, // Added 'selected' property
    },   {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      username: 'jane_smith',
      email: 'janesmith@example.com',
      phone: '987-654-3210',
      website: 'https://janesmith.com',
      occupation: 'Graphic Designer',
      hobbies: ['Photography', 'Art', 'Gaming'],
      selected: false, // Added 'selected' property
    },
    {
      id: 3,
      name: 'David Johnson',
      age: 45,
      username: 'david_johnson',
      email: 'davidjohnson@example.com',
      phone: '555-123-4567',
      website: 'https://davidjohnson.com',
      occupation: 'Project Manager',
      hobbies: ['Hiking', 'Writing', 'Cycling'],
      selected: false, // Added 'selected' property
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      username: 'jane_smith',
      email: 'janesmith@example.com',
      phone: '987-654-3210',
      website: 'https://janesmith.com',
      occupation: 'Graphic Designer',
      hobbies: ['Photography', 'Art', 'Gaming'],
      selected: false, // Added 'selected' property
    },
    {
      id: 3,
      name: 'David Johnson',
      age: 45,
      username: 'david_johnson',
      email: 'davidjohnson@example.com',
      phone: '555-123-4567',
      website: 'https://davidjohnson.com',
      occupation: 'Project Manager',
      hobbies: ['Hiking', 'Writing', 'Cycling'],
      selected: false, // Added 'selected' property
    },   {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      username: 'jane_smith',
      email: 'janesmith@example.com',
      phone: '987-654-3210',
      website: 'https://janesmith.com',
      occupation: 'Graphic Designer',
      hobbies: ['Photography', 'Art', 'Gaming'],
      selected: false, // Added 'selected' property
    },
    {
      id: 3,
      name: 'David Johnson',
      age: 45,
      username: 'david_johnson',
      email: 'davidjohnson@example.com',
      phone: '555-123-4567',
      website: 'https://davidjohnson.com',
      occupation: 'Project Manager',
      hobbies: ['Hiking', 'Writing', 'Cycling'],
      selected: false, // Added 'selected' property
    },   {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      username: 'jane_smith',
      email: 'janesmith@example.com',
      phone: '987-654-3210',
      website: 'https://janesmith.com',
      occupation: 'Graphic Designer',
      hobbies: ['Photography', 'Art', 'Gaming'],
      selected: false, // Added 'selected' property
    },
    {
      id: 3,
      name: 'David Johnson',
      age: 45,
      username: 'david_johnson',
      email: 'davidjohnson@example.com',
      phone: '555-123-4567',
      website: 'https://davidjohnson.com',
      occupation: 'Project Manager',
      hobbies: ['Hiking', 'Writing', 'Cycling'],
      selected: false, // Added 'selected' property
    },   {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      username: 'jane_smith',
      email: 'janesmith@example.com',
      phone: '987-654-3210',
      website: 'https://janesmith.com',
      occupation: 'Graphic Designer',
      hobbies: ['Photography', 'Art', 'Gaming'],
      selected: false, // Added 'selected' property
    },
    {
      id: 3,
      name: 'David Johnson',
      age: 45,
      username: 'david_johnson',
      email: 'davidjohnson@example.com',
      phone: '555-123-4567',
      website: 'https://davidjohnson.com',
      occupation: 'Project Manager',
      hobbies: ['Hiking', 'Writing', 'Cycling'],
      selected: false, // Added 'selected' property
    },   {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      username: 'jane_smith',
      email: 'janesmith@example.com',
      phone: '987-654-3210',
      website: 'https://janesmith.com',
      occupation: 'Graphic Designer',
      hobbies: ['Photography', 'Art', 'Gaming'],
      selected: false, // Added 'selected' property
    },
    {
      id: 3,
      name: 'David Johnson',
      age: 45,
      username: 'david_johnson',
      email: 'davidjohnson@example.com',
      phone: '555-123-4567',
      website: 'https://davidjohnson.com',
      occupation: 'Project Manager',
      hobbies: ['Hiking', 'Writing', 'Cycling'],
      selected: false, // Added 'selected' property
    },   {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      username: 'jane_smith',
      email: 'janesmith@example.com',
      phone: '987-654-3210',
      website: 'https://janesmith.com',
      occupation: 'Graphic Designer',
      hobbies: ['Photography', 'Art', 'Gaming'],
      selected: false, // Added 'selected' property
    },
    {
      id: 3,
      name: 'David Johnson',
      age: 45,
      username: 'david_johnson',
      email: 'davidjohnson@example.com',
      phone: '555-123-4567',
      website: 'https://davidjohnson.com',
      occupation: 'Project Manager',
      hobbies: ['Hiking', 'Writing', 'Cycling'],
      selected: false, // Added 'selected' property
    },   {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      username: 'jane_smith',
      email: 'janesmith@example.com',
      phone: '987-654-3210',
      website: 'https://janesmith.com',
      occupation: 'Graphic Designer',
      hobbies: ['Photography', 'Art', 'Gaming'],
      selected: false, // Added 'selected' property
    },
    {
      id: 3,
      name: 'David Johnson',
      age: 45,
      username: 'david_johnson',
      email: 'davidjohnson@example.com',
      phone: '555-123-4567',
      website: 'https://davidjohnson.com',
      occupation: 'Project Manager',
      hobbies: ['Hiking', 'Writing', 'Cycling'],
      selected: false, // Added 'selected' property
    },   {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      username: 'jane_smith',
      email: 'janesmith@example.com',
      phone: '987-654-3210',
      website: 'https://janesmith.com',
      occupation: 'Graphic Designer',
      hobbies: ['Photography', 'Art', 'Gaming'],
      selected: false, // Added 'selected' property
    },
    {
      id: 3,
      name: 'David Johnson',
      age: 45,
      username: 'david_johnson',
      email: 'davidjohnson@example.com',
      phone: '555-123-4567',
      website: 'https://davidjohnson.com',
      occupation: 'Project Manager',
      hobbies: ['Hiking', 'Writing', 'Cycling'],
      selected: false, // Added 'selected' property
    },   {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      username: 'jane_smith',
      email: 'janesmith@example.com',
      phone: '987-654-3210',
      website: 'https://janesmith.com',
      occupation: 'Graphic Designer',
      hobbies: ['Photography', 'Art', 'Gaming'],
      selected: false, // Added 'selected' property
    },
    {
      id: 3,
      name: 'David Johnson',
      age: 45,
      username: 'david_johnson',
      email: 'davidjohnson@example.com',
      phone: '555-123-4567',
      website: 'https://davidjohnson.com',
      occupation: 'Project Manager',
      hobbies: ['Hiking', 'Writing', 'Cycling'],
      selected: false, // Added 'selected' property
    },   {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      username: 'jane_smith',
      email: 'janesmith@example.com',
      phone: '987-654-3210',
      website: 'https://janesmith.com',
      occupation: 'Graphic Designer',
      hobbies: ['Photography', 'Art', 'Gaming'],
      selected: false, // Added 'selected' property
    },
    {
      id: 3,
      name: 'David Johnson',
      age: 45,
      username: 'david_johnson',
      email: 'davidjohnson@example.com',
      phone: '555-123-4567',
      website: 'https://davidjohnson.com',
      occupation: 'Project Manager',
      hobbies: ['Hiking', 'Writing', 'Cycling'],
      selected: false, // Added 'selected' property
    },   {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      username: 'jane_smith',
      email: 'janesmith@example.com',
      phone: '987-654-3210',
      website: 'https://janesmith.com',
      occupation: 'Graphic Designer',
      hobbies: ['Photography', 'Art', 'Gaming'],
      selected: false, // Added 'selected' property
    },
    {
      id: 3,
      name: 'David Johnson',
      age: 45,
      username: 'david_johnson',
      email: 'davidjohnson@example.com',
      phone: '555-123-4567',
      website: 'https://davidjohnson.com',
      occupation: 'Project Manager',
      hobbies: ['Hiking', 'Writing', 'Cycling'],
      selected: false, // Added 'selected' property
    },   {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      username: 'jane_smith',
      email: 'janesmith@example.com',
      phone: '987-654-3210',
      website: 'https://janesmith.com',
      occupation: 'Graphic Designer',
      hobbies: ['Photography', 'Art', 'Gaming'],
      selected: false, // Added 'selected' property
    },
    {
      id: 3,
      name: 'David Johnson',
      age: 45,
      username: 'david_johnson',
      email: 'davidjohnson@example.com',
      phone: '555-123-4567',
      website: 'https://davidjohnson.com',
      occupation: 'Project Manager',
      hobbies: ['Hiking', 'Writing', 'Cycling'],
      selected: false, // Added 'selected' property
    },
    {
      id: 4,
      name: 'Emily Davis',
      age: 26,
      username: 'emily_davis',
      email: 'emilydavis@example.com',
      phone: '111-222-3333',
      website: 'https://emilydavis.com',
      occupation: 'Content Writer',
      hobbies: ['Blogging', 'Reading', 'Yoga'],
      selected: false, // Added 'selected' property
    }
  ]);

  constructor(private http: HttpClient) {
    // this.http.get<User[]>('https://localhost:3000').subscribe({
    //   next: (data) => this.users.set(data),
    //   error: (error) => this.handleRequestError(error),
    // });
  }

  public toggleUsers(checked: boolean) {
    this.users.update((users) => {
      return users.map((user) => {
        return { ...user, selected: checked };
      });
    });
  }

  private handleRequestError(error: any) {
    const msg = 'An error occurred while fetching users';
    toast.error(msg, {
      position: 'bottom-right',
      description: error.message,
      action: {
        label: 'Undo',
        onClick: () => console.log('Action!'),
      },
      actionButtonStyle: 'background-color:#DC2626; color:white;',
    });
  }

  ngOnInit() {}
}

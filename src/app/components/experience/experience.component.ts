import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent {
  experiences = [
    {
      year: 'Aug 2023 – Present',
      title: 'Happy Digital LLC',
      role: 'Software Engineer II',
      points: [
        'Delivering ERP solutions for vending and NGOs at BrainCrop.',
        'Built .NET Core ERP for US & Iceland vending.',
        'Integrated 50+ machines (JOFEMAR, TCN) with real-time ERP sync.',
        'Led Node.js + MongoDB backend for live bookings, coupons, e-wallet.',
        'Shipped enterprise apps with UI/UX, backend, and frontend teams.',
        'Launched NGO ERP & scholarship portal used by 10K+ in South Asia.',
      ],
      tech: [
        { icon: '/assets/icons/dotnet.svg', name: '.NET Core' },
        { icon: '/assets/icons/mysql.svg', name: 'SQL' },
        { icon: '/assets/icons/angular.svg', name: 'Angular' },
        { icon: '/assets/icons/nodedotjs.svg', name: 'Node.js' },
        { icon: '/assets/icons/mongodb.svg', name: 'MongoDB' },
        { icon: '/assets/icons/docker.svg', name: 'Docker' },
        { icon: '/assets/icons/adyen.svg', name: 'Adyen' },
        { icon: '/assets/icons/git.svg', name: 'Git' },
        { icon: '/assets/icons/linux.svg', name: 'Linux' },
        { icon: '/assets/icons/swagger.svg', name: 'Swagger' },
        { icon: '/assets/icons/postman.svg', name: 'Postman' },
        { icon: '/assets/icons/powerbi.svg', name: 'Power BI' },
        { icon: '/assets/icons/sap.svg', name: 'SAP Crystal Reports' },
      ]
    },
    {
      year: 'Mar 2020 - Present',
      title: 'BrainCrop solutions',
      role: 'Team Lead',
      points: [
        'Led WooCommerce multisite - 12+ subdomains and dashboards.',
        'Built sync service for 4+ databases, cutting manual entry by 80%.',
        'Created SchoolWare ERP for 3+ schools + Parent & Admission portals.',
        'Designed & Enabled custom school rules; no affect in shared modules.'
      ],
      tech: [
        { icon: '/assets/icons/nodedotjs.svg', name: 'Node.js' },
        { icon: '/assets/icons/mongodb.svg', name: 'MongoDB' },
        { icon: '/assets/icons/docker.svg', name: 'Docker' },
        { icon: '/assets/icons/wordpress.svg', name: 'Wordpress' },
        { icon: '/assets/icons/php.svg', name: 'PHP' },
        { icon: '/assets/icons/linux.svg', name: 'Linux' },
        { icon: '/assets/icons/amazonec2.svg', name: 'Amazon EC2' },
        { icon: '/assets/icons/amazonrds.svg', name: 'Amazon RDS' },
        { icon: '/assets/icons/amazons3.svg', name: 'Amazon S3' },
        { icon: '/assets/icons/amazonroute53.svg', name: 'Amazon Route 53' },
        { icon: '/assets/icons/git.svg', name: 'Git' },
        { icon: '/assets/icons/cloudflare.svg', name: 'Cloudflare' },
        { icon: '/assets/icons/swagger.svg', name: 'Swagger' },
        { icon: '/assets/icons/postman.svg', name: 'Postman' },
        { icon: '/assets/icons/jira.svg', name: 'Jira' },
        { icon: '/assets/icons/slack.svg', name: 'Slack' },
        { icon: '/assets/icons/basecamp.svg', name: 'Basecamp' },
      ]
    },
    {
      year: 'Oct 2016 – Mar 2020',
      title: 'BrainCrop Solutions',
      role: 'Software Engineer I',
      points: [
        'Built Smart School ERP with 15+ modules (staff, cafeteria, academics).',
        'Implemented RFID-based attendance with real-time validation.',
        'Launched parent portal with live alerts for attendance, exams, and fees.',
        'Developed SAP Crystal Reports for different modules.'
      ],
      tech: [
        { icon: '/assets/icons/dotnet.svg', name: '.NET MVC' },
        { icon: '/assets/icons/mysql.svg', name: 'SQL' },
        { icon: '/assets/icons/sap.svg', name: 'SAP Crystal Reports' },
        { icon: '/assets/icons/javascript.svg', name: 'Javascript' },
        { icon: '/assets/icons/html5.svg', name: 'HTML' },
        { icon: '/assets/icons/css.svg', name: 'CSS' },
        { icon: '/assets/icons/windows.svg', name: 'Windows Server' }
      ]
    }
  ];
}

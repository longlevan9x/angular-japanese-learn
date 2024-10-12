import { Component, OnInit } from '@angular/core';
import { NavModel } from '../../../models/nav';

@Component({
    selector: 'app-layout-nav',
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
    navs: NavModel[] = [
        {
            name: "Trang chủ",
            path: 'pratice'
        },
        {
            name: 'Minna',
            path: 'practice/minna',
            children: [
                {
                    name: 'Từ vựng',
                    path: 'vocabulary'
                },
                {
                    name: 'Ngữ pháp',
                    path: 'grammar'
                },
                {
                    name: 'Hán tự',
                    path: 'kanji'
                }
            ]
        }
    ];

    ngOnInit(): void {
        this.navs = this.navRecursive(this.navs);
    }

    navRecursive(navs?: NavModel[], parent?: NavModel): NavModel[]  {
        if(!navs) {
            return [];
        }

        navs = navs?.map(nav => {
            let parentPath = parent?.path || '';

            if(parentPath && !parentPath?.startsWith('/')) {
                parentPath = '/' + parent?.path;
            }

            nav.path = [parent?.path, nav.path].join('/');

            if( nav.children?.length) {
                nav.children = this.navRecursive(nav.children, nav);
            }

            return nav;
        });

        return navs;
    }
}

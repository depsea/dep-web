import { Page } from 'components';
import * as React from 'react';

export class ArticleListPage extends React.Component<any> {
    render() {
        return (
            <Page name="article-list" loading={false} error={null}>
                article list page
            </Page>
        );
    }
}

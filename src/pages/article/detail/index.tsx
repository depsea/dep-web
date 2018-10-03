import { Page } from 'components';
import * as React from 'react';

export class ArticleDetailPage extends React.Component<any> {
    render() {
        return (
            <Page name="article-detail" loading={false} error={null}>
                article detail page
            </Page>
        );
    }
}

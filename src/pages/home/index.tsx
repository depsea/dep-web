import { Page } from 'components';
import * as React from 'react';

export class HomePage extends React.Component<any> {
    render() {
        const { loading, error } = this.props;
        return (
            <Page name="home" loading={loading} error={error}>
                home page
            </Page>
        );
    }
}

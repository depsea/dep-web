import * as React from 'react';

export interface PageProps {
    loading: boolean;
    error?: Error | null;
    name: string;
}

export const Page: React.SFC<PageProps> = props => {
    const { name = '', children } = props;
    return (
        <div className={`_page _page-${name}`}>
            {children}
        </div>
    );
};

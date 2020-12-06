import {
  RouteProps as ReactDOMRouteProps,
  RouteComponentProps,
} from 'react-router-dom';

export interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component?:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

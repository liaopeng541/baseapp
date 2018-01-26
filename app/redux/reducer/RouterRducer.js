/**
 * Created by liao on 2018/1/26.
 */
import {Routers} from '../../components/RootNavigator';
export const navReducer = (state=Routers.router.getStateForAction(Routers.router.getActionForPathAndParams('Home')),action) => {
    const newState = Routers.router.getStateForAction(action, state);
    return newState || state;
}

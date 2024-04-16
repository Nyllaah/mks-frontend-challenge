import React from 'react';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import thunk from 'redux-thunk';
import { StateType } from './types';
import productReducer from './redux/productReducer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function renderWithProviders(
  component: React.ReactElement,
  state: StateType = {
    showCart: false,
    cartProducts: [],
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  store = createStore(productReducer, state, applyMiddleware(thunk as any))
) {
  return {
    ...render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          {component}
        </Provider>
      </QueryClientProvider>
    ),
    user: userEvent.setup(),
    store,
  };
}
export default renderWithProviders;
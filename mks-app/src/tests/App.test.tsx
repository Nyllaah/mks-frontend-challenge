import { render, screen } from '@testing-library/react';
import App from '../App';
import renderWithProviders from '../renderWithProviders';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from '../redux/store';

const queryClient = new QueryClient();

describe('Componente App', () => {
  describe('Verifica se renderiza todos os elementos', () => {
    test('Verifica se o header é renderizado', () => {
      const app = renderWithProviders(<App />);
      console.log(app);
      
      const header = screen.getByTestId('header-wrapper');
      expect(header).toBeInTheDocument();
    })
    test('renderiza skeleton quando isLoading é verdadeiro', async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <App />
          </Provider>
        </QueryClientProvider>
      );
      const el = await screen.findAllByTestId('product-skeleton');
      expect(el).toHaveLength(8);
    });
  })
})
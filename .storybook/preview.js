export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const decorators = [
  (Story) => (
    <div>
      {/* Falta fazer ser possivel acessar o contexto para todos os componentes , mas importar
      qualquer context aqui parece fazer parar todo o storybook */}
      {/* <SectionProvider>
        <CharacterProvider>
          <DeviceProvider> */}
      {/* <Story bla="asdf" /> */}
      {/* </DeviceProvider>
        </CharacterProvider>
      </SectionProvider> */}
    </div>
  ),
];

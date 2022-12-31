# A library from odin project
https://yokuny.github.io/A-library-from-odin-project/

# Este projeto é sobre
## > Validação de formularios no client-side com HTML e CSS e com JavaScript no back-end

> **Formulários são a parte principal de vários sites**. **Quase todos os sites têm formulários** **de inscrição, formulários de contato, formulários de pesquisa**.
> 

> **Antes de enviar dados para o servidor, é importante garantir que todos os campos obrigatórios do formulário sejam preenchidos**, no formato correto.
> 

> **A validação do lado do cliente é uma verificação inicial** e um recurso para boa experiência do usuário; **Se os dados forem enviados para o server para serem verificados, tomara muito tempo**.
> 

> Ainda assim **deve ser feito uma verificação de dados no `back-end`**, **porque é fácil burlar a validação do lado do usuário** e muitos podem enviar péssimos dados.
> 

### Há duas formas de validação

## Atributos de validação nos elementos do formulário

- `required`: Especifica que o elemento obrigatoriamente deve ser preenchido.
- `minlength` & `maxlength`: Especifica o mínimo e o máximo do **`texto` `(string)`**
- `min` &`max`: o valor mínimo e máximo numérico.
- `type`: Dita um preset para data. Sendo > números, e-mail …
- `pattern`: Especifica uma > [**expressão regular**](https://www.notion.so/Sobre-programa-o-3da2bd8b16df4ca1915b8ef73e9acd82) < que deve ser seguida.

> Se a validação ocorrer a pseudoclasse de CSS é atribuída `:valid` ao elemento

> Quando um elemento fica invalido > entra no atributo `:invalid` ou/e `:out-of-range`

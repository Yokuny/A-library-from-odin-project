# A library from odin project
https://yokuny.github.io/A-library-from-odin-project/

# Este projeto é sobre
### > Validação de formularios no client-side com HTML e CSS e com JavaScript no back-end

> **Formulários são a parte principal de vários sites**. **Quase todos os sites têm formulários** **de inscrição, formulários de contato, formulários de pesquisa**.
> 

> **Antes de enviar dados para o servidor, é importante garantir que todos os campos obrigatórios do formulário sejam preenchidos**, no formato correto.
> 

> **A validação do lado do cliente é uma verificação inicial** e um recurso para boa experiência do usuário; **Se os dados forem enviados para o server para serem verificados, tomara muito tempo**.
> 

> Ainda assim **deve ser feito uma verificação de dados no `back-end`**, **porque é fácil burlar a validação do lado do usuário** e muitos podem enviar péssimos dados.
> 

## Há duas formas de validação

### Atributos de validação nos elementos do formulário

- `required`: Especifica que o elemento obrigatoriamente deve ser preenchido.  Um elemento com required tem a subclasse de CSS `:required` para personalizar todos os elementos que são obrigatorios.
- `minlength` & `maxlength`: Especifica o mínimo e o máximo do **`texto` `(string)`**
- `min` &`max`: o valor mínimo e máximo numérico.
- `type`: Dita um preset para data. Sendo > números, e-mail …
- `pattern`: Especifica uma > [**expressão regular**](https://www.notion.so/Sobre-programa-o-3da2bd8b16df4ca1915b8ef73e9acd82) < que deve ser seguida.

> Se a validação ocorrer a pseudoclasse de CSS é atribuída `:valid` ao elemento

> Quando um elemento fica invalido > entra no atributo `:invalid` ou/e `:out-of-range`

> Que devem ser personalizados para que o usuario entenda oque deve ser feito
>



## Validação de formulário com JS

> aplicável aos elementos do DOM
> 

### `.validity` retorna um `object` que contem vários propriedades descrevendo todas as validades de um elemento. O `object` pode ser filtrado filtrado seguindo a ramificação do `object` com tais **`keys`** principais.

```jsx
**if(nameElement.validity.typeMismatch)
```

- `**.patternMismatch**` retorna `**true**` caso as informações não cumpra o `pattern` e `**false**` se atender o `pattern`.
- `**.tooLong**` retorna **`true`** se o valor for maior que o especificado por **`maxlength`**
- `**.tooShort**` retorna `**true`** caso receba no `**input` `string`** menor que a requisitado por `**minlength**`
- `**.rangeOverflow`** retorna **`true`** se receber valor numero maior que o de **`max`**
- `**.rangeUnderflow`** funciona ao contrario de **`.rangeOverflow`**
- **`.typeMismatch`** retorna `**true`** quando não esta conforme a sintaxe (quando o tipo é **`email`** ou **`url`**)
- `.valid` retorna **`true`** se atender todas as restrições
- `**.valueMissing`** retorna `true` caso no elemento tenha atributo **`required`** e não foi preenchido

```jsx
**document.getElementById("userName").checkValidity();
```

- `.setCustomValidity(" ")` permite atribuir uma mensagem personalizada ao usuário
- `.checkValidity()` retorna `true` ou `false` checando a validação do elemento pego pelo Java Script

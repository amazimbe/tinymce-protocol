export default `
  <ul class='available-protocols'>
    {{#each protocols}}
      {{#unless isNew}}
      <li>
        <a href='javascript:void(0);'>{{title}}</a>
        <div class='protocol-data' style='display: none;'>{{{content}}}</div>
      </li>
      {{/unless}}
    {{/each}}
  </ul>`;

export default `
  <ul class='protocols_list'>
    {{#each protocols}}
      {{#unless isNew}}
      <li>
        <a href='javascript:void(0);'>{{title}}</a>
        <div class='protocol_data' style='display: none;'>{{{content}}}</div>
      </li>
      {{/unless}}
    {{/each}}
  </ul>`;

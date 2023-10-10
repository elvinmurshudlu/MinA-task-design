export const form_settings = {
  "title":"Create New Card Panel",
  "enpoint":"https://api.com/card",
  "fields":[
    {
      "field":"title",
      "label":"Enter Card Title",
      "placeholder":"Please write here",
      "type":"input-text",
      "required":true,
      "default":null
    },
    {
      "field":"desc",
      "label":"Enter Description",
      "placeholder":"Please write here",
      "type":"textarea",
      "required":true,
      "default":null
    },
    {
      "field":"select1",
      "label":"Select Option 1",
      "type":"select",
      "required":true,
      "default":null,
      "data":[
        {"value":1,"label":"Option1"},
        {"value":2,"label":"Option2"},
        {"value":3,"label":"Option3"},
        {"value":4,"label":"Option4"}
      ]
    },
    {
      "field":"select2",
      "label":"Select Option 2",
      "type":"select",
      "required":false,
      "default":null,
      "data":[
        {"value":1,"label":"Option1"},
        {"value":2,"label":"Option2"},
        {"value":3,"label":"Option3"},
        {"value":4,"label":"Option4"}
      ]
    },
    {
      "field":"answers",
      "label":"Answers",
      "type":"SpecialComponent1",
      "required":true,
      "default":[],
      "data":[]
    }
  ]
}

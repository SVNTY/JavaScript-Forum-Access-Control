# JavaScript-Forum-Access-Control
Access control for nested JSON forums

Edit the nested group arrays and user group array to see different results

## Example of a forums structure

- `['Public']`
  - `['Public', 'Cops']`
    - `['Cops']`
    - `['Cops', 'CopInteralAffairs']`
    - `['Cops', 'CopHumanResources']`
  - `['Public, Government']`
    - `['Government']`
    - `['Government'], ['GovernmentSenate']`
    - `['Government', 'GovernmentHouseOfRepresentitives']`

## User Permissions

A user with the groups of 

`['Public', 'Cops', 'CopInteralAffairs', 'CopHuamnResources', 'Government', 'GovernmentSenate']`

Could see all forums other than `GovernmentHouseOfRepresentitives`

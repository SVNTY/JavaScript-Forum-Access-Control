# JavaScript-Forum-Access-Control
Access control for nested JSON forums

edit the nested group arrays and user group array to see different results

example of a forums structure

- Public
  - Public, Cops
    - Cops
      - Cops, CopInteralAffairs
      - Cops, CopHumanResources
  - Public, Government
    - Government
      - Government, GovernmentSentate
      - Government, GovernmentHouseOfRepresentitives


A user with the groups of 

['Public', 'Cops', 'CopInteralAffairs', 'CopHuamnResources', 'Government', 'GovernmentSentate']

Could see all forums other than `GovernmentHouseOfRepresentitives`

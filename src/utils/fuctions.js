export function getBackendUrl(tenant_id) {

    let BACKEND;
    const test  =   false 
    let opt     =   false;   
    if (!window) {
        opt         =   1;
        BACKEND = process.env.NEXT_PUBLIC_BACKENDREMOTE;
    }else if (test) {
        opt         =   2;
        BACKEND     =   "https://backend."+tenant_id+"."+process.env.NEXT_PUBLIC_TENANT+"/api/v1";
    } else if (window && window.location && window.location.hostname && !window.location.port) {
        opt         =   3;
        BACKEND = window.location.protocol + "//backend."+tenant_id + "." + window.location.hostname + (window.location.port ? ":" + process.env.NEXT_PUBLIC_PORT + "/api/v1" : "/api/v1");
    } else if (window && window.location && window.location.hostname && window.location.port) {
        opt         =   4;
        /* Quiere decir que estoy en localhost */
        BACKEND = window.location.protocol + "//" + tenant_id + "." + window.location.hostname + (window.location.port ? ":" + process.env.NEXT_PUBLIC_PORT + "/api/v1" : "/api/v1");
    }
    console.log("backend: "+BACKEND,"opt :"+opt," Tenant: "+tenant_id)  
    return BACKEND;
}

export function organizeData(backendData) {
  const organizedData = {
    config: [],
    realestate: [],
    realestateGroups: [],
    realestateProperties: [],
    realestateCommonSpaces: [],
  };

  if (!backendData.config) {
    return;
  }
  // Iterate through the config data
  backendData.config.forEach((configItem) => {
    const { get_all, realestate_common_spaces, ...configData } = configItem;

    // Add config data to the organizedData
    organizedData.config.push(configData);

    // Process get_all data
    get_all.forEach((realestateItem) => {
      const { by_groups, ...realestateData } = realestateItem;

      // Add realestate data to the organizedData
      organizedData.realestate.push(realestateData);

      // Process by_groups data
      by_groups.forEach((propertyItem) => {
        // Extract id and name from propertyItem
        const { id, name } = propertyItem;

        // Add realestateGroups data to the organizedData
        organizedData.realestateGroups.push({
          realestate_groups_id: propertyItem.realestate_groups_id,
          ...propertyItem,
        });

        // Add only id and name to realestateProperties data
        organizedData.realestateProperties.push({ id, name });
      });
    });

    // Process realestate_common_spaces data
    organizedData.realestateCommonSpaces.push(...realestate_common_spaces);
  });

  return organizedData;
}

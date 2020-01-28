import {permissions} from "../constants";
export default function hasPermission(moduleName, role, permissionType)
{
    let data=permissions[moduleName];
    if(!permissions||!data[permissionType])
     { console.log(`${role} doesn't have permission to ${permissionType}`);
      return false;
    }
    if(data[permissionType].includes( role ))
    {
        console.log(`${role} has permission to ${permissionType}`);
        return true;
    }
    else
      console.log(`${role} doesn't have permission to ${permissionType}`);
}
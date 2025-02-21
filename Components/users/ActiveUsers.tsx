import { useOthers, useSelf } from "@liveblocks/react";
import { Avatar } from "./Avatar";
import styles from "./index.module.css";
import { generateRandomName } from "@/lib/utils";
import { useMemo } from "react";

const IMAGE_SIZE = 48;

const ActiveUsers = ()=> {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > 3;

  const memoizedUser = useMemo(()=>{
    return (
      <div className="flex items-center justify-center gap-1 py-2">
        <div className="flex pl-3">
          
          {currentUser && (
            
            <Avatar name="You" otherStyle ="border-[2px] border-primary-green" />
            
          )}
          {users.slice(0, 3).map(({ connectionId, info }) => {
            return (
              <Avatar key={connectionId}  name={generateRandomName()} otherStyles = "-ml-3" />
            );
          })}
  
          {hasMoreUsers && <div className={styles.more}>+{users.length - 3}</div>}
  
        </div>
      </div>
    );
  }, [users.length])

  return memoizedUser;
}

export default ActiveUsers
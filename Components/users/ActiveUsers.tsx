import { useOthers, useSelf } from "@liveblocks/react";
import { Avatar } from "./Avatar";
import styles from "./index.module.css";
import { generateRandomName } from "@/lib/utils";

const IMAGE_SIZE = 48;

const ActiveUsers = ()=> {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > 3;

  return (
    <main className="flex h-screen w-full select-none place-content-center place-items-center">
      <div className="flex pl-3">
        
        {currentUser && (
          
          <Avatar name="You" otherStyle ="border-[3px] border-primary-green" />
          
        )}
        {users.slice(0, 3).map(({ connectionId, info }) => {
          return (
            <Avatar key={connectionId}  name={generateRandomName()} otherStyles = "-ml-3" />
          );
        })}

        {hasMoreUsers && <div className={styles.more}>+{users.length - 3}</div>}

      </div>
    </main>
  );
}

export default ActiveUsers
import { Button } from 'antd';
import AreaItem from '../AreaItem';
import { SortableContainer } from 'react-sortable-hoc';
import styles from './style.module.scss';
import { IAllSchema } from '../../../common/types/schema';
import useStore from '../../hooks/useStore';

const SortableList = SortableContainer(({ list }: { list: IAllSchema[] }) => {
  return (
    <ul className={styles.list}>
      {list.map((_: any, index: number) => (
        <AreaItem key={index} value={index} index={index} />
      ))}
    </ul>
  );
});

const AreaList = () => {
  const { addPageChildren, children, onSortEnd } = useStore();

  return (
    <div>
      <SortableList
        distance={10}
        list={children}
        onSortEnd={onSortEnd}
        lockAxis="y"
      />
      <Button type="primary" ghost onClick={addPageChildren}>
        新增页面区块
      </Button>
    </div>
  );
};

export default AreaList;

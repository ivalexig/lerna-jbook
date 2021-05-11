import { Cell } from '../state';
import CodeCell from './code-cell';
import TextEditor from './text-editor';
import ActionBar from './action-bar';

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  const child: JSX.Element =
    cell.type === 'code' ? (
      <CodeCell cell={cell} />
    ) : (
      <TextEditor cell={cell} />
    );

  return (
    <div>
      <ActionBar id={cell.id} />
      {child}
    </div>
  );
};

export default CellListItem;

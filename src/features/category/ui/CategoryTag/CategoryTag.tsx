import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import X from '@/shared/ui/icons/X';
import { cn } from '@/shared/ui/styles/utils';

export interface CategoryTagProps {
  tagName: string;
  size?: 'small' | 'medium' | 'large';
  onDelete?: () => void;
}

const CategoryTag: React.FC<CategoryTagProps> = ({
  tagName,
  size,
  onDelete,
}) => {
  return (
    <Badge
      className={cn(
        'flex flex-row items-center bg-[#EAF6EC] text-[#28A745] rounded-full text-[13px]',
        'px-2 py-1',
        size === 'small' && 'px-2 py-1',
        size === 'medium' && 'px-3 py-2',
        size === 'large' && 'px-4 py-3'
      )}
      aria-label={`카테고리: ${tagName}`}
    >
      {tagName}
      {onDelete && (
        <Button
          className='ml-1 w-3 h-3'
          size='icon'
          variant='ghost'
          aria-label={`category tag - ${tagName} - delete button`}
          onClick={() => {
            onDelete();
          }}
        >
          <X size={12} color='#28A745' />
        </Button>
      )}
    </Badge>
  );
};

export default CategoryTag;

import { cn } from '@/lib/utils';
import { Platform, TextInput, type TextInputProps } from 'react-native';

function Input({
  className,
  placeholderClassName,
  value,
  ...props
}: TextInputProps & React.RefAttributes<TextInput>) {
  return (
    <TextInput
      className={cn(
        'flex w-full min-w-0 flex-row items-center text-sm leading-5 shadow-sm shadow-black/5 bg-[#2F323F] font-work-sans-regular tracking-tighter',
        'rounded-2xl px-4 h-11',
        'text-white',
        'focus:border-[1.2px] focus:border-[#FF9000] focus:bg-[#22232B]',
        Platform.select({
          web: 'border border-transparent',
          native: 'border-0',
        }),
        props.editable === false &&
          cn(
            'opacity-50',
            Platform.select({
              web: 'disabled:pointer-events-none disabled:cursor-not-allowed',
            }),
          ),
        Platform.select({
          web: cn(
            'placeholder:text-muted-foreground selection:bg-primary outline-none transition-[color,box-shadow] md:text-sm',
            'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          ),
          native: 'placeholder:text-[#9CA3AF]',
        }),
        className,
      )}
      value={value}
      {...props}
    />
  );
}

export { Input };

import { CheckSquare} from 'lucide-react';

function Header() {
    return (
        <header className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
          <CheckSquare className="h-8 w-8 text-white mr-3" />
            <h1 className="text-3xl font-bold text-white">KaamKaro</h1>
          </div>
        </div>
      </header>
    )
}

export default Header
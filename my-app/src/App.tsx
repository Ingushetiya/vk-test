import { Button } from './button';
import { Counter } from './counter';
import './App.css';

export const App = () => {
    return (
        <div className="App">
            <Button
                label="fwefwef"
                size="28"
                variant="primary"
                rightIcon={<Counter value="1" size={16} variant="primary" />}
            />
        </div>
    );
};

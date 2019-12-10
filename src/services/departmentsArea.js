class DepartmentsArea {
    /**
     * @type {null|HTMLElement}
     * @private
     */
    privateArea = null;

    /**
     * @type {null|function}
     * @private
     */
    privateSubscriber = null;

    set area(value) {
        if (this.privateArea === value) {
            return;
        }

        this.privateArea = value;

        if (this.privateSubscriber) {
            this.privateSubscriber(this.area);
        }
    }

    get area() {
        return this.privateArea;
    }

    subscribe(fn) {
        this.privateSubscriber = fn;

        return () => {
            this.privateSubscriber = null;
        };
    }
}

export default new DepartmentsArea();
